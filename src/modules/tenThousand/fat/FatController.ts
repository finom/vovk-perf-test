import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fat")
export default class FatController {
  @operation({
    summary: "Get Fat",
  })
  @get()
  static getFat = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fat",
  })
  @post("{id}")
  static createFat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
