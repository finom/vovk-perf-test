import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fne")
export default class FneController {
  @operation({
    summary: "Get Fne",
  })
  @get()
  static getFne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fne",
  })
  @post("{id}")
  static createFne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
