import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzm")
export default class GzmController {
  @operation({
    summary: "Get Gzm",
  })
  @get()
  static getGzm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzm",
  })
  @post("{id}")
  static createGzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
