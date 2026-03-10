import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpj")
export default class DpjController {
  @operation({
    summary: "Get Dpj",
  })
  @get()
  static getDpj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpj",
  })
  @post("{id}")
  static createDpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
