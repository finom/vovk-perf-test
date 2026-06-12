import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ih")
export default class IhController {
  @operation({
    summary: "Get Ih",
  })
  @get()
  static getIh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ih",
  })
  @post("{id}")
  static createIh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
