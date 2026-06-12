import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsk")
export default class GskController {
  @operation({
    summary: "Get Gsk",
  })
  @get()
  static getGsk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gsk",
  })
  @post("{id}")
  static createGsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
