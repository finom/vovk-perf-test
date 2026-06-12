import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akm")
export default class AkmController {
  @operation({
    summary: "Get Akm",
  })
  @get()
  static getAkm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Akm",
  })
  @post("{id}")
  static createAkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
