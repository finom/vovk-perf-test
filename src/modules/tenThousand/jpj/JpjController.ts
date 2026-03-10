import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpj")
export default class JpjController {
  @operation({
    summary: "Get Jpj",
  })
  @get()
  static getJpj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpj",
  })
  @post("{id}")
  static createJpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
