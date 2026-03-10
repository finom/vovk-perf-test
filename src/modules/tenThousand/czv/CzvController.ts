import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czv")
export default class CzvController {
  @operation({
    summary: "Get Czv",
  })
  @get()
  static getCzv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Czv",
  })
  @post("{id}")
  static createCzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
