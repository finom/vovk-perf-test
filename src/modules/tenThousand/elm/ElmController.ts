import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elm")
export default class ElmController {
  @operation({
    summary: "Get Elm",
  })
  @get()
  static getElm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Elm",
  })
  @post("{id}")
  static createElm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
