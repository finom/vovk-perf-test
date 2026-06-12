import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iem")
export default class IemController {
  @operation({
    summary: "Get Iem",
  })
  @get()
  static getIem = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iem",
  })
  @post("{id}")
  static createIem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
