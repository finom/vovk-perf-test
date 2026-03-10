import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csj")
export default class CsjController {
  @operation({
    summary: "Get Csj",
  })
  @get()
  static getCsj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Csj",
  })
  @post("{id}")
  static createCsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
