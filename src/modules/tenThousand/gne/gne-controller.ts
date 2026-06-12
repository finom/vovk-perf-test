import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gne")
export default class GneController {
  @operation({
    summary: "Get Gne",
  })
  @get()
  static getGne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gne",
  })
  @post("{id}")
  static createGne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
