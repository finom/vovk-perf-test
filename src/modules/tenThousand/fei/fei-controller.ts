import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fei")
export default class FeiController {
  @operation({
    summary: "Get Fei",
  })
  @get()
  static getFei = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fei",
  })
  @post("{id}")
  static createFei = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
