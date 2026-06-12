import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elx")
export default class ElxController {
  @operation({
    summary: "Get Elx",
  })
  @get()
  static getElx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Elx",
  })
  @post("{id}")
  static createElx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
