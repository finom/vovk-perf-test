import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("goc")
export default class GocController {
  @operation({
    summary: "Get Goc",
  })
  @get()
  static getGoc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Goc",
  })
  @post("{id}")
  static createGoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
