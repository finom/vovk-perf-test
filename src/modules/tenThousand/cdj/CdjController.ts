import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdj")
export default class CdjController {
  @operation({
    summary: "Get Cdj",
  })
  @get()
  static getCdj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdj",
  })
  @post("{id}")
  static createCdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
