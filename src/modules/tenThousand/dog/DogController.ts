import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dog")
export default class DogController {
  @operation({
    summary: "Get Dog",
  })
  @get()
  static getDog = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dog",
  })
  @post("{id}")
  static createDog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
