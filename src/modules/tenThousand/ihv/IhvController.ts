import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihv")
export default class IhvController {
  @operation({
    summary: "Get Ihv",
  })
  @get()
  static getIhv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ihv",
  })
  @post("{id}")
  static createIhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
