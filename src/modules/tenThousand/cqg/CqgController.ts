import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqg")
export default class CqgController {
  @operation({
    summary: "Get Cqg",
  })
  @get()
  static getCqg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cqg",
  })
  @post("{id}")
  static createCqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
