import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckl")
export default class CklController {
  @operation({
    summary: "Get Ckl",
  })
  @get()
  static getCkl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckl",
  })
  @post("{id}")
  static createCkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
