import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwo")
export default class IwoController {
  @operation({
    summary: "Get Iwo",
  })
  @get()
  static getIwo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iwo",
  })
  @post("{id}")
  static createIwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
