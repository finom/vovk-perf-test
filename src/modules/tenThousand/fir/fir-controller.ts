import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fir")
export default class FirController {
  @operation({
    summary: "Get Fir",
  })
  @get()
  static getFir = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fir",
  })
  @post("{id}")
  static createFir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
