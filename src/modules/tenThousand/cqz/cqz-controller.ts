import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqz")
export default class CqzController {
  @operation({
    summary: "Get Cqz",
  })
  @get()
  static getCqz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cqz",
  })
  @post("{id}")
  static createCqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
