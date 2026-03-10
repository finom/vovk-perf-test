import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hen")
export default class HenController {
  @operation({
    summary: "Get Hen",
  })
  @get()
  static getHen = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hen",
  })
  @post("{id}")
  static createHen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
