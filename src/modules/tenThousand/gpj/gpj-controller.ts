import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpj")
export default class GpjController {
  @operation({
    summary: "Get Gpj",
  })
  @get()
  static getGpj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpj",
  })
  @post("{id}")
  static createGpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
