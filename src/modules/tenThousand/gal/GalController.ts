import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gal")
export default class GalController {
  @operation({
    summary: "Get Gal",
  })
  @get()
  static getGal = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gal",
  })
  @post("{id}")
  static createGal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
