import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdc")
export default class GdcController {
  @operation({
    summary: "Get Gdc",
  })
  @get()
  static getGdc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdc",
  })
  @post("{id}")
  static createGdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
