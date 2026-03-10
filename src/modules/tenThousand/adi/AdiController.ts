import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adi")
export default class AdiController {
  @operation({
    summary: "Get Adi",
  })
  @get()
  static getAdi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adi",
  })
  @post("{id}")
  static createAdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
