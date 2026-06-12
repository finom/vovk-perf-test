import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqc")
export default class CqcController {
  @operation({
    summary: "Get Cqc",
  })
  @get()
  static getCqc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cqc",
  })
  @post("{id}")
  static createCqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
