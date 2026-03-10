import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qt")
export default class QtController {
  @operation({
    summary: "Get Qt",
  })
  @get()
  static getQt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Qt",
  })
  @post("{id}")
  static createQt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
