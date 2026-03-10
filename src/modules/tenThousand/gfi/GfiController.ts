import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfi")
export default class GfiController {
  @operation({
    summary: "Get Gfi",
  })
  @get()
  static getGfi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfi",
  })
  @post("{id}")
  static createGfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
