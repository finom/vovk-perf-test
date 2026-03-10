import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hio")
export default class HioController {
  @operation({
    summary: "Get Hio",
  })
  @get()
  static getHio = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hio",
  })
  @post("{id}")
  static createHio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
