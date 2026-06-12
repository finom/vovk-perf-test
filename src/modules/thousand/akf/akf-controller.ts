import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akf")
export default class AkfController {
  @operation({
    summary: "Get Akf",
  })
  @get()
  static getAkf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Akf",
  })
  @post("{id}")
  static createAkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
