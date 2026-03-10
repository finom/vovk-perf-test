import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isy")
export default class IsyController {
  @operation({
    summary: "Get Isy",
  })
  @get()
  static getIsy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isy",
  })
  @post("{id}")
  static createIsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
