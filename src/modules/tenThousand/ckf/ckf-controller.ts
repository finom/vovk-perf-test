import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckf")
export default class CkfController {
  @operation({
    summary: "Get Ckf",
  })
  @get()
  static getCkf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckf",
  })
  @post("{id}")
  static createCkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
