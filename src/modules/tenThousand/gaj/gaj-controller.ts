import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gaj")
export default class GajController {
  @operation({
    summary: "Get Gaj",
  })
  @get()
  static getGaj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gaj",
  })
  @post("{id}")
  static createGaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
