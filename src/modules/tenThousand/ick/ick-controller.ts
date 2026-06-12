import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ick")
export default class IckController {
  @operation({
    summary: "Get Ick",
  })
  @get()
  static getIck = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ick",
  })
  @post("{id}")
  static createIck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
