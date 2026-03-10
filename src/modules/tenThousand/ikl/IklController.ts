import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikl")
export default class IklController {
  @operation({
    summary: "Get Ikl",
  })
  @get()
  static getIkl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ikl",
  })
  @post("{id}")
  static createIkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
