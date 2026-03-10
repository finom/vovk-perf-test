import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgg")
export default class CggController {
  @operation({
    summary: "Get Cgg",
  })
  @get()
  static getCgg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cgg",
  })
  @post("{id}")
  static createCgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
