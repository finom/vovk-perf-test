import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myu")
export default class MyuController {
  @operation({
    summary: "Get Myu",
  })
  @get()
  static getMyu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myu",
  })
  @post("{id}")
  static createMyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
