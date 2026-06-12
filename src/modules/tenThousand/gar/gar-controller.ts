import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gar")
export default class GarController {
  @operation({
    summary: "Get Gar",
  })
  @get()
  static getGar = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gar",
  })
  @post("{id}")
  static createGar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
