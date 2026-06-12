import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gaz")
export default class GazController {
  @operation({
    summary: "Get Gaz",
  })
  @get()
  static getGaz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gaz",
  })
  @post("{id}")
  static createGaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
