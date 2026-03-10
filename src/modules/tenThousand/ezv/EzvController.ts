import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezv")
export default class EzvController {
  @operation({
    summary: "Get Ezv",
  })
  @get()
  static getEzv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ezv",
  })
  @post("{id}")
  static createEzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
