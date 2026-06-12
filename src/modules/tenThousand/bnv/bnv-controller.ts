import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnv")
export default class BnvController {
  @operation({
    summary: "Get Bnv",
  })
  @get()
  static getBnv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnv",
  })
  @post("{id}")
  static createBnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
