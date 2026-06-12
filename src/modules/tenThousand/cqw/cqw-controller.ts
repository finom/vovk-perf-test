import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqw")
export default class CqwController {
  @operation({
    summary: "Get Cqw",
  })
  @get()
  static getCqw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cqw",
  })
  @post("{id}")
  static createCqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
