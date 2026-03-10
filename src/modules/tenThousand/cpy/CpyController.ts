import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpy")
export default class CpyController {
  @operation({
    summary: "Get Cpy",
  })
  @get()
  static getCpy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpy",
  })
  @post("{id}")
  static createCpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
