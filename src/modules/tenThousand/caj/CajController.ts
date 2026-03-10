import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("caj")
export default class CajController {
  @operation({
    summary: "Get Caj",
  })
  @get()
  static getCaj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Caj",
  })
  @post("{id}")
  static createCaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
