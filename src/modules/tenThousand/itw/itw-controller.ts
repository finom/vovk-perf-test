import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itw")
export default class ItwController {
  @operation({
    summary: "Get Itw",
  })
  @get()
  static getItw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itw",
  })
  @post("{id}")
  static createItw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
