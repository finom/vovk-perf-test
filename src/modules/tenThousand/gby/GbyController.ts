import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gby")
export default class GbyController {
  @operation({
    summary: "Get Gby",
  })
  @get()
  static getGby = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gby",
  })
  @post("{id}")
  static createGby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
