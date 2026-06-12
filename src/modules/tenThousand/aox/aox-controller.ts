import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aox")
export default class AoxController {
  @operation({
    summary: "Get Aox",
  })
  @get()
  static getAox = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aox",
  })
  @post("{id}")
  static createAox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
