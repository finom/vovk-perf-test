import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nry")
export default class NryController {
  @operation({
    summary: "Get Nry",
  })
  @get()
  static getNry = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nry",
  })
  @post("{id}")
  static createNry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
