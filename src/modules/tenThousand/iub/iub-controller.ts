import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iub")
export default class IubController {
  @operation({
    summary: "Get Iub",
  })
  @get()
  static getIub = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iub",
  })
  @post("{id}")
  static createIub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
