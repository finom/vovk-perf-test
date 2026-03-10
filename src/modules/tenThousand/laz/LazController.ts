import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("laz")
export default class LazController {
  @operation({
    summary: "Get Laz",
  })
  @get()
  static getLaz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Laz",
  })
  @post("{id}")
  static createLaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
