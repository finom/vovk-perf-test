import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amb")
export default class AmbController {
  @operation({
    summary: "Get Amb",
  })
  @get()
  static getAmb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Amb",
  })
  @post("{id}")
  static createAmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
