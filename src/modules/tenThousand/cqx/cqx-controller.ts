import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqx")
export default class CqxController {
  @operation({
    summary: "Get Cqx",
  })
  @get()
  static getCqx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cqx",
  })
  @post("{id}")
  static createCqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
